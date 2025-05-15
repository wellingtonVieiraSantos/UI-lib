'use client'
import { Button } from '@/components/ui/Button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger
} from '@/components/ui/Dropdown'
import {
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube
} from 'lucide-react'
import { useState } from 'react'

export default function DropdownExample() {
  const [itemChecked1, setItemChecked1] = useState(false)
  const [itemChecked2, setItemChecked2] = useState(false)
  const [itemRadioOption, setItemRadioOption] = useState('1')

  return (
    <div className='w-full h-[calc(100dvh-80px)] flex justify-center md:py-10'>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant='border'>
            <span>Abrir menu Dropdown</span>
          </Button>
        </DropdownTrigger>
        <DropdownContent sideOffset={4}>
          <DropdownLabel className='p-2 text-sm'>
            <h3>Jhon Doe</h3>
            <span className='text-sm text-secondary/50 dark:text-terciary/50'>
              email@contato.com
            </span>
          </DropdownLabel>
          <DropdownSeparator />
          <DropdownItem>
            <span className='w-2/3 truncate'>Instagram</span>
            <Instagram />
          </DropdownItem>
          <DropdownItem>
            Facebook
            <Facebook />
          </DropdownItem>
          <DropdownItem>
            Youtube
            <Youtube />
          </DropdownItem>
          <DropdownItem disabled>
            Twitter
            <Twitter />
          </DropdownItem>
          <DropdownLabel className='p-2 text-sm'>Sub Menu</DropdownLabel>
          <DropdownSeparator />
          <DropdownSub>
            <DropdownSubTrigger>
              More Links <ChevronRight />
            </DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownLabel className='text-sm p-2'>
                Sub Menu Options
              </DropdownLabel>
              <DropdownSeparator />
              <DropdownItem>
                Twitch
                <Twitch />
              </DropdownItem>
              <DropdownItem>
                Github
                <Github />
              </DropdownItem>
              <DropdownItem>
                LinkedIn
                <Linkedin />
              </DropdownItem>
              <DropdownItem>
                <span>More...</span>
              </DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownLabel className='p-2 text-sm'>Checkbox Item</DropdownLabel>
          <DropdownSeparator />
          <DropdownCheckboxItem
            disabled
            checked={itemChecked1}
            onCheckedChange={setItemChecked1}
          >
            Check 1
          </DropdownCheckboxItem>
          <DropdownCheckboxItem
            checked={itemChecked2}
            onCheckedChange={setItemChecked2}
          >
            Check 2
          </DropdownCheckboxItem>
          <DropdownLabel className='p-2 text-sm'>Radio Group</DropdownLabel>
          <DropdownSeparator />
          <DropdownRadioGroup
            value={itemRadioOption}
            onValueChange={setItemRadioOption}
          >
            <DropdownRadioItem value='1'>Radio 1</DropdownRadioItem>
            <DropdownRadioItem value='2'>Radio 2</DropdownRadioItem>
            <DropdownRadioItem value='3' disabled>
              Radio 3
            </DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}
