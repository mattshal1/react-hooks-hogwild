export const AddHog = ({ newHog, setNewHog, handleSubmit }) => {
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setNewHog({ ...newHog, image: event.target.result });
        };
        reader.readAsDataURL(file);
      }
    };
    return (
      <form id="newHogForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name of Hog:
          <input
            id="name"
            name="name"
            type="text"
            value={newHog.name}
            onChange={(e) => setNewHog({ ...newHog, name: e.target.value })}
            autoComplete="true" 
          />
        </label>
        <br />
        <label htmlFor="specialty">
          Specialty of Hog:
          <input
          id="specialty"
            name="specialty"
            type="text"
            value={newHog.specialty}
            onChange={(e) => setNewHog({ ...newHog, specialty: e.target.value })}
            autoComplete="true" 
          />
        </label>
        <br />
        <label htmlFor="greased">
          is Greased:
          <input
              id="greased"
            name="greased"
            type="checkbox"
            value={newHog.greased}
            onChange={(e) => setNewHog({ ...newHog, greased: e.target.checked })}
          />
        </label>
        <br />
        <label htmlFor="weight">
          Weight of Hog:
          <input
          id="weight"
            name="weight"
            type="number"
            value={newHog.weight}
            onChange={(e) => setNewHog({ ...newHog, weight: e.target.value })}
          />
        </label>
        <br />
        <label htmlFor="highest medal achieved">
          highest medal achieved:
          <select
          id="highest medal achieved"
            name="highest medal achieved"
            type="text"
            onChange={(e) =>
              setNewHog({ ...newHog, "highest medal achieved": e.target.value })
            }
          >
            <option value={newHog["highest medal achieved"]}>wood</option>
            <option value="bronze">bronze</option>
            <option value="silver">silver</option>
            <option value="gold">gold</option>
            <option value="platinum">platinum</option>
            <option value="diamond">diamond</option>
          </select>
        </label>
        <br />
        <label htmlFor="image">
          image of Hog:
          <input
          id="image"
            name="image"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            onChange={(e) => handleImageUpload(e)}
          />
        </label>
        <div>
          <button type="submit" form="newHogForm" value="Submit">
            Add New Hog
          </button>
        </div>
      </form>
    );
  };