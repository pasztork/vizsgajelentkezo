const expect = require("chai").expect;
const checkPasswordMW = require("../../../../middleware/auth/checkPasswordMW");

describe("checkPasswordMW ", () => {
  it("should set res.locals.badPass to true if no password was sent in", (done) => {
    const reqMock = {
      body: {},
    };
    const resMock = { locals: {} };
    checkPasswordMW({})(reqMock, resMock, () => {
      expect(resMock.locals.badPass).to.be.true;
      done();
    });
  });

  it("should set res.locals.badPass to true if incorrect password is provided", (done) => {
    const reqMock = {
      body: { password: "asdasd" },
    };
    const resMock = { locals: {} };
    checkPasswordMW({})(reqMock, resMock, () => {
      expect(resMock.locals.badPass).to.be.true;
      done();
    });
  });

  it("should redirect to /admindate if the user logged in successfully", (done) => {
    const reqMock = {
      body: { password: "kiskutya" },
      session: {},
    };
    const resMock = {
      redirect: (where) => {
        expect(where).to.be.eql("/admindate");
        expect(reqMock.session.loggedIn).to.be.true;
        done();
      },
    };
    checkPasswordMW({})(reqMock, resMock, () => {});
  });
});
