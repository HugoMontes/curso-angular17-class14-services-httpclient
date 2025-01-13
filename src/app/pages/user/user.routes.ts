import { Routes } from '@angular/router';
import { UserBasicComponent } from './user-basic/user-basic.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const isRole = (role: string) => {
	const roleLogged = localStorage.getItem('role');
	return roleLogged === role;
};

// export default [
//     {
//         path: '',
//         children: [
//             {
//                 path: '',
//                 canMatch: [() => isRole('admin')],
//                 component: UserAdminComponent
//             },
//             {
//                 path: '',
//                 canMatch: [() => isRole('basic')],
//                 component: UserBasicComponent
//             },
//         ]
//     }
// ] as Routes;


export default [
    {
        path: '',
        canMatch: [() => isRole('admin')],
        component: UserAdminComponent
    },
    {
        path: '',
        canMatch: [() => isRole('basic')],
        component: UserBasicComponent
    },
] as Routes;