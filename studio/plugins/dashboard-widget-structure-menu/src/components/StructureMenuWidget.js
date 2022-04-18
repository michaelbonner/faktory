import { Link } from 'part:@sanity/base/router'
import FolderIcon from 'part:@sanity/base/folder-icon'
import FileIcon from 'part:@sanity/base/file-icon'
import React from 'react'

function getIconComponent(item) {
  if (item.icon) return item.icon
  if (!item.schemaType) return FileIcon
  return item.schemaType.icon || FolderIcon
}

function StructureMenuWidget(props) {
  return (
    <div>
      <div>
        <h3>Edit your content</h3>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem'
        }}
      >
        {props.structure.items.map(item => {
          const Icon = getIconComponent(item)
          return (
            <div key={item.id}>
              <Link
                href={`/desk/${item.id}`}
                style={{ display: 'flex', gap: '0.4rem', alignItems: 'end' }}
              >
                <div>
                  <Icon />
                </div>
                <div>{item.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StructureMenuWidget
