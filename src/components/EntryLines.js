import EntryLine from './EntryLine'

const EntryLines = ({entries, deleteEntry, setIsOpen}) => {
  return (
    <>
      {entries.map((entry, index) => (
        <EntryLine
					key={index}
					{...entry}
					deleteEntry={deleteEntry}
          setIsOpen={setIsOpen}
        />
      ))}
    </>
  );
};

export default EntryLines;
