import { useRef, useState } from "react";

const useUploadImage = () => {
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState(null);

  const imageRef = useRef<any>();

  const handleClick = (e: any) => {
    e.preventDefault();
    imageRef.current.click();
  };

  const onChange = (e: any, multiple?: any, setFieldValue?: any, name?: string) => {
    if (multiple) {
      const selectedFIles: any = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles];
      targetFilesObject.map((file) => {
        return selectedFIles.push({ file: file, url: URL.createObjectURL(file) });
      });
      setPreview(selectedFIles);
    } else {
      const file = e.target.files[0];
      const reader: any = new FileReader();
      setFile(e.target.files[0]);
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      setFieldValue(name, file?.name);
    }
  };

  const image = {
    preview,
    file,
  };

  return { handleClick, onChange, imageRef, image };
};

export default useUploadImage;
