import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { styles } from "./ContactStyles";

interface Iprops {
  id: string;
}

export default function Contact({ id }: Iprops) {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const form: any = useRef();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      formData.name !== "" &&
      formData.message !== "" &&
      formData.subject !== ""
    ) {
      emailjs
        .sendForm("service_pf070kl", "template_oz728xm", form.current, {
          publicKey: "bTlXmuq98xgOO184x",
        })
        .then(
          () => {
            toast.success("Message sent successfully", {
              theme: "colored",
              position: "top-center",
            });
            setFormData({ name: "", subject: "", message: "" });
          },
          (error: any) => {
            toast.error(`FAILED..., ${error.text}`, {
              theme: "light",
              position: "top-center",
            });
          }
        );
    } else {
      toast.warn("Please fill all details", {
        theme: "light",
        position: "top-center",
      });
    }
  };

  return (
    <Box sx={styles.contactBox} id={id}>
      <Typography variant={"h3"} sx={styles.heading}>
        Contact
      </Typography>
      <Box
        sx={styles.formBox}
        component={"form"}
        onSubmit={handleSubmit}
        ref={form}
        gap={2}
      >
        <Stack direction="column" gap={1} mb={2}>
          <InputLabel sx={styles.label}>Name</InputLabel>
          <InputBase
            sx={styles.input}
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Stack>
        <Stack direction="column" gap={1} mb={2}>
          <InputLabel sx={styles.label}>Subject</InputLabel>
          <InputBase
            sx={styles.input}
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </Stack>
        <Stack direction="column" gap={1} mb={2}>
          <InputLabel sx={styles.label}>Message</InputLabel>
          <Box
            component={"textarea"}
            rows={6}
            value={formData.message}
            sx={styles.textareaField}
            placeholder="Write message..."
            name="message"
            onChange={handleChange}
          />
        </Stack>
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Button variant="contained" sx={styles.sendBtn} type="submit">
            Send
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
