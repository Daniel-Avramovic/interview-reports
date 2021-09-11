

export const getCandidates = async (token) => {
    const response = await fetch("http://localhost:3333/660/api/candidates", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const getCandidates = await response.json();
    return getCandidates;
}