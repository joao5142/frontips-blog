import Input from "@/components/ui/Input";
import styles from "./Contact.module.scss";
import { useState } from "react";
import Button from "../../ui/Button/index";
import ChevronRight from "../../icons/ChevronRight/index";

export default function Contact() {
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [phone, setPhone] = useState<string>();
	const [isButtonActive, setIsButtonActive] = useState<boolean>();

	const handleSubmit = (e: any): void => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="d-flex align-items-center gap-3 mb-4">
					<img src="/assets/icons/user.svg" alt="Name" />
					<Input name={"name"} type={"text"} placeholder={"Your name"} onInput={(value: string) => setName(value)} />
				</div>
				<div className="d-flex align-items-center gap-3 mb-4">
					<img src="/assets/icons/email.svg" alt="Email" />
					<Input
						name={"email"}
						type={"email"}
						placeholder={"Your email"}
						onInput={(value: string) => setEmail(value)}
					/>
				</div>
				<div className="d-flex align-items-center gap-3 mb-5">
					<img src="/assets/icons/phone.svg" alt="Phone" />
					<Input
						name={"password"}
						type={"password"}
						placeholder={"Your Password"}
						onInput={(value: string) => setPhone(value)}
					/>
				</div>
				<Button mouseMove={(e: boolean) => setIsButtonActive(e)}>
					<span className="me-2">Send </span> <ChevronRight color={isButtonActive ? "#fff" : ""} />{" "}
				</Button>
			</form>
		</>
	);
}
