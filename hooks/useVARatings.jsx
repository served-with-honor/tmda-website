import { useState, useEffect } from 'react';
import {
  calculateRating,
  calculatePayment,
  calculateBilateral,
  filterBilateralMatches
} from 'va-disability-ratings';

export default function useVARatings(disabilities, dependents) {
  const [rating, setRating] = useState(0);
  const [bilateralFactor, setBilateralFactor] = useState(0);
  const [payment, setPayment] = useState(0);
    
  useEffect(() => {
    // TODO: fix this
    // const [ bilateralRatings, otherRatings ] = filterBilateralMatches(disabilities);
    // const items = otherRatings.map(d => d.value);

    // if (bilateralRatings.length > 0) {
    //   const bilateral = calculateBilateral(bilateralRatings);
    //   setBilateralFactor(bilateral.factor);
    //   items.push(bilateral.percent);
    // }
    const ratingData = calculateRating(disabilities.map(d => d.value));

    setRating(ratingData);
  }, [disabilities]);

  useEffect(() => {
    const payment = calculatePayment(rating.rounded, dependents);
    setPayment(payment);
  }, [rating, dependents]);

  return {
    rating,
    payment,
    bilateralFactor,
  }
}
