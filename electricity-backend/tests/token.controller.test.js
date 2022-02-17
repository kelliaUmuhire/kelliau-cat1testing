const {
  getToken,
  updateToken,
  newToken,
} = require("../controllers/token.controller");
const db = require("./db");
const Token = require("../models/Token");

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe("Token created when", () => {
  let f_token;
  it("Create token", async (done) => {
    const { token } = await newToken(123456, "500");

    const token_f_db = await Token.findById(token._id);
    f_token = token_f_db.token_id;

    expect(token_f_db.meter_num).toEqual(123456);
    // expect(token.created)
    done();
  });

  it("Get token", async (done) => {
    const { token } = await getToken(f_token);
    expect(token.meter_num).toEqual(123456);
    done();
  });
  it("Update token status", async (done) => {
    const { retur_m } = await updateToken(f_token);
    expect(retur_m.msg).toEqual("updated");
    done();
  });
});

// describe("Test token controller", () => {
//   let db;
//   const m_data = {token_id: 12345678, meter_num: 123456,created_at:"2022-02-17", expires_at:"2022-02-27"};
//     it("Create token", async (done) => {
//       const { tokenId } = await newToken(
//         m_data.token_id,
//         m_data.meter_num,
//         m_data.created_at,
//         m_data.expires_at
//       );

//       const token = await Token.findById(tokenId);

//       expect(token.token_id).toEqual(12345678);
//       // expect(token.created)
//       done();
//     });
//   });
