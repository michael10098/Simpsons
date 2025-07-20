import {Button, ComboBox, Input, Label, ListBox, ListBoxItem, Menu, MenuItem, MenuTrigger, Popover, SubmenuTrigger} from 'react-aria-components';

function TestPage() {
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
        </>
    )
}

export default TestPage