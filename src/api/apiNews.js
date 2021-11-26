import apiDefault from "./apiDefault";

export default {
    async getAll() {
        const url = `Plant?pageNumber=1&empresaId=${companyId}&names=${names}&size=1000`;
        return await apiDefault.get({ url })
    },
    async getById(id) {
        const url = `plant/getInformation?id=${id}`
        return await apiDefault.get({ url })
    },
    // async create(request) {
    //     const url = 'plant/createWithControlPoints'
    //     return await apiDefault.post({ url, request })
    // },
    // async update(request) {
    //     const url = 'plant/updateWithControlPoints'
    //     return await apiDefault.put({ url, request })
    // },
    // async delete(id) {
    //     const url = `Plant/${id}`
    //     return await apiDefault.delete(url)
    // },
};
