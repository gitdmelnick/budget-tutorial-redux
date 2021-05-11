import EntryLine from './EntryLine'

const EntryLines = ({entries, deleteEntry, editEntry}) => {
  return (
    <>
      {entries.map((entry, index) => (
        <EntryLine
					key={index}
					{...entry}
					deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </>
  );
};

export default EntryLines;
