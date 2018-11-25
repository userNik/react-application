export const sliceText = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength);
};

export const reStructureRepos = (repos) => {
    return repos.reduce((acc, {
        full_name: fullName,
        name,
        id,
        clone_url: url,
        forks,
        stargazers_count: stars,
    }) =>
        ([...acc, { fullName, name, key: `${id}`, id, url, forks, stars }]), []);
};

export const mergeEntities = (currentEntity = [], newEntity = []) => {
    return newEntity.reduce((acc, item) => {
        const alreadyExisted = currentEntity.find(({ id }) => item.id === id);

        if (alreadyExisted) {
            return acc;
        }

        acc.push(item);

        return acc;

    }, [...currentEntity]);
};