import { Login } from "./login";

describe("Login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("deve exibir um alert com boas vindas", () => {
    Login();
    expect(mockAlert).toHaveBeenCalledWith("Bem Vindo!");
  });
});
