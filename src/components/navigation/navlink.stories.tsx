import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Navlink from './navlink';
import {ReduxProvider} from "@/components/reduxProvider";
import {ClientTheme} from "@/theme/theme";
import {store} from "@/app/store";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

const iconMap = {
    None: undefined,
    Home: <HomeIcon />,
    Menu: <MenuIcon />,
    Settings: <SettingsIcon />,
};

const meta = {
  component: Navlink,
    decorators: [Story => <ReduxProvider store={store}>
  <ClientTheme>
        <Story href='#' icon={HomeIcon}/>
  </ClientTheme>
  </ReduxProvider>],
} satisfies Meta<typeof Navlink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextButtonStory: Story = {
        argTypes:
            label:{
                control:'text'
            }



    },
    args: {
        href: '/',
        variant:'text',
        label: 'Home',

    }
};

export const IconButtonStory: Story = {
    argTypes:{

        icon:{

            control:'select',
            options: ['None', 'Home', 'Menu', 'Settings'],
            mapping: iconMap
        },
        label:{
            control:'text'
        },
        background:{
            control:'color'
        },
        href:{
          control:'text'
        }

    },
    args:{
        label:'Toggle Drawer',
        href:'#',
        icon:'Home' as any,
        variant:'icon'


    }

};

export const ButtonStory: Story = {
    argTypes:{
        variant:'contained',
        bgColor:{
            control:'color'
        },
        label:{
            control:'text'
        }
    },
    args:{
        bgColor:'primary',
        label:'Toggle Drawer',
        href:'#'
    }
};