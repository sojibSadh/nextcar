"use server";

export const signup = async (data) => {
   const res = await fetch(
       `${process.env.NEXT_AUTH_URL}/api/user`, {

              method: "POST",
                headers: {
                    "Content-Type": "application/json",
                 },
                body: JSON.stringify(data),
       });

       if(!res.ok){
          throw new Error("Failed to create review");
       }

       return res.json();
    };