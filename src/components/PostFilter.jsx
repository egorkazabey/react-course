import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={(e) => setFilter({...filter , query: e.target.value})}
				type="text"
				placeholder="Поиск..."
			/>
			<MySelect
				value={filter.query}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue="Сортировка"
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' },
				]}
			></MySelect>
		</div>
	);
};

export default PostFilter;
