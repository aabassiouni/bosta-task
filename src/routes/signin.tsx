import { useQuery } from "@tanstack/react-query";

export function SigninPage() {
  const { data } = useQuery({
    queryKey: ["signin"],
    queryFn: async () => {
      return await fetch("https://api.github.com/users/aabassiouni", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
  });

  return <div>{JSON.stringify(data)}</div>;
}
