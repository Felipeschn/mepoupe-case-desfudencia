import { ConsultZipCodeProvider } from "../../src/providers/implementations/consultZipCodeProvider";

describe("Zip Code Consultant", () => {
  it("should receive address information based on a given a valid zip code", async () => {
    const actual = 92325210;
    const expected = {
      cep: "92325-210",
      logradouro: "Rua Nossa Senhora Aparecida",
      complemento: "",
      bairro: "Harmonia",
      localidade: "Canoas",
      uf: "RS",
      ibge: "4304606",
      ddd: "51",
      siafi: "8589",
    };

    const sut = await new ConsultZipCodeProvider().consult(actual);

    expect(sut).toMatchObject(expected);
  });

  it("throws and error message when is a invalid zipcode", async () => {
    try {
      const actual = 92325210;

      await new ConsultZipCodeProvider().consult(actual);
    } catch (error) {
      expect(error.message).toBe("Invalid zipcode");
    }
  });
});
