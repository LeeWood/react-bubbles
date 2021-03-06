import React, { useState } from "react";
import auth from "../utils/auth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is it saved right now?
    
    auth()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      //*this works...I need to set the actual state of color to res.data.color. It's saving...the display just needs to be immediately updated so you don't have to refresh the page to see the change in color name.
      /////!USEEFFECT???
      .then(res => {
        console.log(res.data.color);
        //updateColors(res.data.color);
        setEditing(false);
      })
      .catch(err => console.log(err))
      //updates color name and hex, but needs to manually refresh the browser window to see changes...
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    auth()
      .delete(`/api/colors/${color.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
     //again...successful, but component is not re-rendering after making the call. ot updating state?? 
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
