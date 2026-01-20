"use server";

export const createReview = async (reviewData) => {
   const res = await fetch(
       `${process.env.NEXT_AUTH_URL}/api/reviews?${getParams}`, {
              method: "POST",
                headers: {
                    "Content-Type": "application/json",
                 },
                body: JSON.stringify(reviewData),
       });

       if(!res.ok){
          throw new Error("Failed to create review");
       }
       return res.json();

    };







export const getAllReviews = async (getParams) => {
   const searchParam = new URLSearchParams(getParams).toString();
   console.log(searchParam);

   const res = await fetch(
       `${process.env.NEXT_AUTH_URL}/api/reviews?${searchParam}`
   );
//    await new Promise((resolve) =>
//        setTimeout(() => {
//            resolve();
//        }, 2000)
//    );
   const data = await res.json();
   return data;
};










// export const getSingleService = async (slug) => {
//    const res = await fetch(
//      `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${slug}`,
//    );

//    // artificial delay (for skeleton demo)
//    await new Promise((resolve) => setTimeout(resolve, 2000));

//    const data = await res.json();
//    return data;
//  };
