
import { faker } from "@faker-js/faker";
export default (user,count,companyIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
companyId: companyIdIds[i % companyIdIds.length],
item: faker.lorem.sentence(1),
subTotal: faker.lorem.sentence(1),
total: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
