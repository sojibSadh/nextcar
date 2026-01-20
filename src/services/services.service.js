 "use server";

 export const getAllServices = async (getParams) => {
    const searchParam = new URLSearchParams(getParams).toString();
    console.log(searchParam);

    const res = await fetch(
        `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${searchParam}`
    );
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 2000)
    );
    const data = await res.json();
    return data;
};




export const getSingleService = async (slug) => {
    const res = await fetch(
      `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${slug}`,
    );

    // artificial delay (for skeleton demo)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await res.json();
    return data;
  };
