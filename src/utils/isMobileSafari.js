export function isMobileSafari() {
	return (
		navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
		navigator.userAgent.match(/AppleWebKit/)
	);
}
