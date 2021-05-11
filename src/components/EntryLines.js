import EntryLine from './EntryLine'

const EntryLines = ({entries, deleteEntry}) => {
  return (
    <>
      {entries.map((entry, index) => (
        <EntryLine
					key={index}
					{...entry}
					deleteEntry={deleteEntry}
        />
      ))}
    </>
  );
};

export default EntryLines;
