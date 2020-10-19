package com.riviewz.util;

public class Util {
	
	public static float calculateRating(String rating_1, String rating_2, String rating_3, String rating_4, String rating_5, String rating_6, String rating_7, String rating_8) {
		
		int score = 0;
		int weightage = 0;
		float starRating = 0.0f;
		
		//*********************************************************************parameter1
		if (rating_1.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_1.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_1.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_1.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_1.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}
		
		//*********************************************************************parameter2
		if (rating_2.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_2.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_2.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_2.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_2.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}
		
		//*********************************************************************parameter3
		if (rating_3.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_3.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_3.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_3.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_3.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}
		
		//*********************************************************************parameter4
		if (rating_4.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_4.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_4.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_4.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_4.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}		
		
		//*********************************************************************parameter5
		if (rating_5.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_5.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_5.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_5.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_5.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}
		
		//*********************************************************************parameter6
		if (rating_6.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_6.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_6.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_6.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_6.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}
		
		//*********************************************************************parameter7
		if (rating_7.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_7.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_7.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_7.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_7.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}
		
		//*********************************************************************parameter8
		if (rating_8.equalsIgnoreCase("Best"))
		{
			weightage = 5;
			score = score + weightage;
		}
		else if (rating_8.equalsIgnoreCase("Good"))
		{
			weightage = 4;
			score = score + weightage;
		}
		else if (rating_8.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
			score = score + weightage;
		}
		else if (rating_8.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
			score = score + weightage;
		}
		else if (rating_8.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
			score = score + weightage;
		}	
		
		System.out.println("score = " + score);
		
		if (score < 4) {
			starRating = 0.0f;
		} else if (score >= 4 && score <= 7) {
			starRating = 0.5f;
		} else if (score >= 8 && score <= 11) {
			starRating = 1f;
		} else if (score >= 12 && score <= 15) {
			starRating = 1.5f;
		} else if (score >= 16 && score <= 19) {
			starRating = 2f;
		} else if (score >= 20 && score <= 23) {
			starRating = 2.5f;
		} else if (score >= 24 && score <= 27) {
			starRating = 3f;
		} else if (score >= 28 && score <= 31) {
			starRating = 3.5f;
		} else if (score >= 32 && score <= 35) {
			starRating = 4f;
		} else if (score >= 36 && score <= 39) {
			starRating = 4.5f;
		} else if (score >= 40) {
			starRating = 5f;
		}		
		
		return starRating;
	}
	
	public static int calculateStarRatingForIndividualParameter(String review) {
		
		int weightage = 0;
		
		if (review.equalsIgnoreCase("Best"))
		{
			weightage = 5;
		}
		else if (review.equalsIgnoreCase("Good"))
		{
			weightage = 4;
		}
		else if (review.equalsIgnoreCase("Avg"))
		{
			weightage = 3;
		}
		else if (review.equalsIgnoreCase("BelowAvg"))
		{
			weightage = 2;
		}
		else if (review.equalsIgnoreCase("NoIdea"))
		{
			weightage = 0;
		}		

		return weightage;		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}