import sanityClient from '../src/sanityConfig';
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

interface ITeamMember {
  name: string,
  position: string,
  image?: SanityImageSource,
}

interface IProvider {
  name: string,
  certification: string,
  team: string,
  image?: SanityImageSource,
  isTeamLead?: boolean
}

const getTeamMembers = async (): Promise<ITeamMember[]> => {
  const query = `
    *[
      _type == "teamMember"
      && active
      && hidden != true
      && 'Telemedica' in entity[]
      && !(_id in path("drafts.**")) 
    ] | order(orderRank asc){
      'name': coalesce(preferred_name, first_name) + " " + last_name,
      position,
      image,
    }
  `;

  return await sanityClient.fetch(query);
}

const getProviders = async (): Promise<IProvider[]> => {
  const query = `
    *[_type=='provider'
    && active
    && !(_id in path("drafts.**"))
    ] | order(orderRank)
    {
      'name': coalesce(name.preferred, name.first) + " " + name.last,
      team,
      isTeamLead,
      certification,
      position,
      image,
    }
  `;
  return await sanityClient.fetch(query);
}

export {
  getTeamMembers,
  getProviders,
}