import { useState, useEffect } from "react";

export default function Sidebar() {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		// Hydration 오류 방지: 클라이언트에서만 실행
		setIsActive(window.innerWidth <= 1280);

		const handleResize = () => {
			setIsActive(window.innerWidth <= 1280);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div id="sidebar" className={isActive ? "inactive" : ""}>
			<div className="inner">
				<a
					href="#sidebar"
					className="toggle"
					onClick={(e) => {
						e.preventDefault();
						setIsActive((prev) => !prev);
					}}
				>
					Toggle
				</a>
				{/* 사이드바 내용 */}
			</div>
		</div>
	);
}
