import { useState, useEffect } from 'react';
import {
  calculateRating,
  calculatePayment,
  calculateBilateral,
  filterBilateralMatches,
} from '@served-with-honor/va-disability-ratings';

export default function useVARatings(disabilities, dependents) {
  const [rating, setRating] = useState(0);
  const [bilateralFactor, setBilateralFactor] = useState(0);
  const [payment, setPayment] = useState(0);
    
  useEffect(() => {
    const isLimb = (item) => item.match(/(Arm)|(Leg)/);
    const limbs = ({ label }) => isLimb(label);
    const nonLimbs = ({ label }) => !isLimb(label);

    const limbsDisabilities = disabilities.filter(limbs);
    const items = disabilities.filter(nonLimbs).map(({ value }) => value);
    
    const [matches, noMatches] = filterBilateralMatches(limbsDisabilities);
    items.push(...noMatches);
    const bilateral = matches.length > 1 ? calculateBilateral(matches) : null;
    if (bilateral?.percent) items.push(bilateral.percent);
    setBilateralFactor(bilateral?.factor || 0);
    
    const ratingData = calculateRating(items);
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
