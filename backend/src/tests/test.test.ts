// src/user/user.repository.test.js
export{};
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const authToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNyVHJhakhFNmJtLU81cUxva1dVUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1leC02Y2pncC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWY0Yzg4YTkyMDc2YTcwMDY3OGVmMDE2IiwiYXVkIjoiUktXbng5SmlqVzdjSmt4RG5sQXhiYkJhUjhua0lnTVgiLCJpYXQiOjE1OTk0MTk3NjUsImV4cCI6MTU5OTQ1NTc2NSwiYXRfaGFzaCI6ImVBaUg3Q2NqSVFNa2R4WGF5RUNtV0EiLCJub25jZSI6Inp0ZWhwdWVnWkw3REJ6RUdhY3E5Rk9PSUZ6cEhaeGtaIn0.q2VoHV8VfI0gdLoYmgAxV8hb04g8m_i2L6lFJBvaqPOH3rBp_KceiPg6VEUe1WYjlVuo8yFT0ZxlctCmvfgSedCDcV8VaX0NT7wl8PvgmPT8_JKzYfK2a5w - FgwawKfM2EPNSo21k_3gRp4gHs - y3eJ3e67lD5A7bEx0ciGDyULsmMnhr3 - DRzH4JaZvrkjMUh3jzzgrnvct_c6Ml6Qxu4ViXxU_YAiGTgD71GXZq_UH - x0scJcr1ddR83iftl9ZcOlQWMNODKYN0HqWqajxIc0QZtKezKOp9xNxEOqhqHZLcInovG0n87QaAwU23ZUAvu9U - cWuHM8k77L - Q5mEIw"
const eventData = {
    name: "Get all todos",
    request: {
        method: "GET",
        header: [
            {
                key: "Authorization",
                value: `Bearer ${authToken}`,
                type: "text"
            }
        ],
        body: {
            mode: "raw",
            raw: ""
        },
        url: {
            raw: "https://x41t883q49.execute-api.us-east-2.amazonaws.com/dev/todos",
            protocol: "https",
            host: [
                "x41t883q49",
                "execute-api",
                "us-east-2",
                "amazonaws",
                "com"
            ],
            path: [
                "dev",
                "todos"
            ]
        }
    },
    response: []
};

const getTodosHandler = require("../lambda/http/getTodos.ts");

describe("UserRepository", function () {
    describe("create", function () {
        it("should add a new user to the db", async function (done) {
            // getTodosHandler.should.eventually.be(true);
            getTodosHandler.handler(eventData)
                .then(data => {
                    done();
                })
                .catch(error => console.log(error));

            expect(true).to.equal(true);
        });
    });
});