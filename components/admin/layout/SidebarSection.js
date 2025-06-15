// components/SidebarSection.js
export default function SidebarSection({ title, children }) {
	return (
		<div className="mb-4">
			{title && <h2 className="mb-2 text-sm text-right text-gray-600 font-medium uppercase">{title}</h2>}
			<ul className="space-y-1">{children}</ul>
		</div>
	);
}
