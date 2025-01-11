"use server";

export const fetchTodos = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
      { cache: "no-store" }
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};
