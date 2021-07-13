
export const GetGuajalotasById = async (id) => {

    const number = parseInt(id)
    const url = 'http://localhost:3004/guajalotas';
    const res = await fetch(url);
    const info = await res.json();
    return info.find(ele => ele.id === number);

}