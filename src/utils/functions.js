import { globals } from ".";

const qa = ''

export default {
    saveData: (user) => {
        const { id, name, last_name, email, token, role } = user
        localStorage.setItem(`name${qa}`, name);
        localStorage.setItem(`last_name${qa}`, last_name);
        localStorage.setItem(`email${qa}`, email);
        localStorage.setItem(`role${qa}`, role);
        localStorage.setItem(`token${qa}`, token);
        localStorage.setItem(`id${qa}`, id);
        globals.token = token
    },
    clearData: () => {
        localStorage.clear();
    },
}