const expect = require("chai").expect;
const authMW = require("../../../../middleware/auth/authMW");

describe("authMW ", () => {
  it("should redirect to /adminlogin if there was no attempt to sign in", (done) => {
    const reqMock = { session: { loggedIn: undefined } };
    authMW({})(
      reqMock,
      {
        redirect: (where) => {
          expect(reqMock.session.loggedIn).to.be.an("undefined");
          expect(where).to.be.eql("/adminlogin");
          done();
        },
      },
      () => {}
    );
  });

  it("should redirect to /adminlogin if user is not logged in", (done) => {
    const reqMock = { session: { loggedIn: false } };
    authMW({})(
      reqMock,
      {
        redirect: (where) => {
          expect(reqMock.session.loggedIn).to.be.false;
          expect(where).to.be.eql("/adminlogin");
          done();
        },
      },
      () => {}
    );
  });

  it("should not redirect if logged in", (done) => {
    const reqMock = { session: { loggedIn: true } };
    authMW({})(reqMock, {}, () => {
      expect(reqMock.session.loggedIn).to.be.true;
      done();
    });
  });
});
