// eslint-disable-next-line no-use-before-define
import { fileUpload } from "../../src/helpers/fileUpload";

// eslint-disable-next-line no-use-before-define
describe("Pruebas en fileUpload", () => {
  // eslint-disable-next-line no-use-before-define
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl ="https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg";
    const resp = await fetch(imageUrl);
    console.log(resp)
    const blob await resp.blob();
    // const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);
    // expect(typeof url).toBe('string');
  });
});
