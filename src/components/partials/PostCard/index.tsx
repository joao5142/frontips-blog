import ChevronRight from "@/components/icons/ChevronRight/index";
import Button from "@/components/ui/Button/index";

type PropsType = {
	children?: React.ReactNode;
	title?: string;
	description?: string;
	action?: Function;
};

export default function PostCard(props: PropsType) {
	return (
		<>
			<h4 className="mb-3">How to deal with subjective feedback from client</h4>
			<p>
				Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки,
				мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда
				нацелены на успех наших клиентов.{" "}
			</p>
			<Button className="mt-4">
				<span className="me-2">Read more</span> <ChevronRight />{" "}
			</Button>
		</>
	);
}
