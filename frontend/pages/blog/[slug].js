import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { getPost } from "../../lib/wordpress";
import Page from "../../components/Page";
import BlogHero from "../../components/BlogHero";
import WPBlocks from "../../src/wp-blocks";
import SimpleTOC from "../../src/wp-blocks/SimpleTOC";
import NewsletterDialog from "../../components/NewsletterDialog";
import ReviewerBlock from "../../components/ReviewerBlock";

export default function Post({ post }) {
  if (!post)
    return (
      <Page>
        <Box sx={{ mt: 20, mb: 10 }}>
          <Container>
            <Alert severity="error">
              There was a problem loading this post
            </Alert>
          </Container>
        </Box>

        <NewsletterDialog delay={10000} />
      </Page>
    );

  const {
    author,
    categories,
    title,
    content,
    featuredImage,
    date,
    modifed,
    metadata,
    reviewedDate,
    reviewer,
  } = post;
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          setCurrentSection(`#${id}`);
        }
      });
    });

    const headings = document.querySelectorAll(
      "h2[id],h3[id],h4[id],h5[id],h6[id]"
    );

    headings.forEach((section) => {
      observer.observe(section);
    });

    //handle scroll to top of page
    const handleScroll = () => {
      const scrolledToTop = window.scrollY === 0;
      if (scrolledToTop) {
        setCurrentSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      headings.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSimpleTOC = (element) =>
    element?.attribs?.class?.includes("simpletoc-list") ||
    element?.attribs?.class?.includes("simpletoc-title");

  const removeFragments = (element) => element.type !== React.Fragment;

  // Exclude SimpleTOC
  const contentComponents = parse(content, {
    trim: true,
    replace: (element) => (!isSimpleTOC(element) ? WPBlocks(element) : <></>),
  }).filter(removeFragments);

  const sideContent = parse(content, {
    trim: true,
    replace: (element) =>
      isSimpleTOC(element) ? SimpleTOC(element, currentSection) : <></>,
  }).filter(removeFragments);

  const hasSideContent = sideContent && sideContent.length > 0;

  return (
    <Page title={title} metadata={metadata}>
      <BlogHero
        {...{ title, author, date, modifed, categories, featuredImage }}
      />

      <Box sx={{ my: 10 }}>
        <Container>
          {hasSideContent ? (
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                {reviewedDate !== null ? (
                  <Box sx={{ paddingY: 5 }}>
                    <ReviewerBlock
                      date={reviewedDate}
                      name={reviewer.name}
                      bio={reviewer.description}
                      imageUrl={reviewer.imageUrl}
                    />
                  </Box>
                ) : null}
                <Box sx={{ position: "sticky", top: "8rem" }}>
                  {sideContent}
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                {contentComponents}
              </Grid>
            </Grid>
          ) : (
            contentComponents
          )}
        </Container>
      </Box>

      <NewsletterDialog delay={10000} />
    </Page>
  );
}

export const getServerSideProps = async ({ params, query }) => {
  const { slug } = params;
  const { preview } = query;
  const post = await getPost(slug, { asPreview: preview });
  return { props: { post } };
};
