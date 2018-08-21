export const getAllTags = (data) => {
    return data.reduce((acc, { tags }) => {
        const id = Number(`${Math.random()}`.slice(2, 7));

        tags.forEach((tag) => {
            const isTagAdded = acc.find(({tagName}) => tagName === tag);

            if (isTagAdded) {
                return;
            }

            acc.push({
                id,
                tagName: tag,
                isSelected: false,
            });
        });

        return acc;
    }, []);
};

export const findAllItemsByTagName = (tagName, data) => {
  return data.filter(({ tags }) => tags.includes(tagName));
};

export const findAllItemsByQuery = (query, data) => {
    return data.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase()));
};