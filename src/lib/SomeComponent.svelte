<div class="dropdown">
	<slot></slot>
</div>

<style lang="scss">
.dropdown {
	> :global(a) {
			color: black;
			
			&:hover {
				color: tomato;
			}
			
			&:first-child {
				color: seagreen;
			}
			
			&::after {
				content: "abc";
			}
		}
}	
</style>
