import { useState } from 'react';
import {Button, ComboBox, Input, Label, ListBox, ListBoxItem, Menu, MenuItem, MenuTrigger, Popover, SubmenuTrigger} from 'react-aria-components';

function TestPage() {
    let [selected, setSelected] = useState(['/images/BartSimpson']);

    return (
        <>
        <div>
        <MenuTrigger>
          <Button aria-label="Menu">☰</Button>
          <Popover>
            <Menu>
              <MenuItem onAction={() => alert('open')}>Open</MenuItem>
              <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
              <MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
              <MenuItem onAction={() => alert('share')}>Share…</MenuItem>
              <MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
              <SubmenuTrigger>
                <MenuItem>Share</MenuItem>
                <Popover>
                  <Menu>
                    <MenuItem>SMS</MenuItem>
                    <MenuItem>X</MenuItem>
                    <SubmenuTrigger>
                      <MenuItem>Email</MenuItem>
                      <Popover>
                        <Menu>
                          <MenuItem>Work</MenuItem>
                          <MenuItem>Personal</MenuItem>
                        </Menu>
                      </Popover>
                    </SubmenuTrigger>
                  </Menu>
                </Popover>
              </SubmenuTrigger>
            </Menu>
          </Popover>
        </MenuTrigger>
        <div>
          <button>Prev page</button>
          <button>Next page</button>
        </div>
        </div>
        <ComboBox>
          <Label>Favorite Animal</Label>
          <div>
            <Input />
            <Button>▼</Button>
          </div>
          <Popover>
            <ListBox>
              <ListBoxItem>Aardvark Cat Test testing dog kangaroo Cat Test testing dog kangaroo Cat Test testing dog kangaroo Cat Test testing dog kangaroo</ListBoxItem>
              <ListBoxItem>Cat</ListBoxItem>
              <ListBoxItem>Dog</ListBoxItem>
              <ListBoxItem>Kangaroo</ListBoxItem>
              <ListBoxItem>Panda</ListBoxItem>
              <ListBoxItem>Snake</ListBoxItem>
            </ListBox>
          </Popover>
        </ComboBox>
        <ListBox 
          aria-label="Favorite animal" 
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          >
          <ListBoxItem id="/images/BartSimpson">Aardvark</ListBoxItem>
          <ListBoxItem id="/images/multiAlarmMap">Cat</ListBoxItem>
          <ListBoxItem id="Dog">Dog</ListBoxItem>
          <ListBoxItem id="Kangaroo">Kangaroo</ListBoxItem>
          <ListBoxItem id="Panda">Panda</ListBoxItem>
          <ListBoxItem id="Snake">Snake</ListBoxItem>
        </ListBox>
        <div>
          Current selection Current selection Current selection Current selection (controlled):{' '}
          {[...selected]}
          <img src={[...selected]} height="100"></img>
        </div>
        </>
    )
}

export default TestPage