import EntryLine from './EntryLine'

const EntryLines = ({entries,  editEntry}) => {
  return (
    <>
      {entries.map((entry, index) => (
        <EntryLine
					key={index}
					{...entry}
          editEntry={editEntry}
        />
      ))}
    </>
  );
};

export default EntryLines;
