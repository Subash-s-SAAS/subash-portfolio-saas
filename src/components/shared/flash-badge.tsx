export default function FlashBadge() {
	return (
		<div className="flex items-center justify-center p-12">
			<button
				type="button"
				className="px-6 py-2 rounded-full bg-cyan-900/10 border border-cyan-900 font-medium inline-flex items-center gap-x-2 text-sm"
			>
				<span className="font-semibold text-gray-900">SUBASH</span>
				<span className="text-cyan-900 border-l pl-2">Featured work</span>
			</button>
		</div>
	);
}
