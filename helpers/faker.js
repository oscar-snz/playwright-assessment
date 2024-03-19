const { faker } = require('@faker-js/faker');


const generateShippingInfo = () => {
    return {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        streetAddress: faker.location.streetAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
    };
};

module.exports = {
    generateShippingInfo,
};
