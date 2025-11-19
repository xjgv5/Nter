export const ActivarClase = navDatos => {
    let claseActivo = navDatos.isActive ? "activo" : "";
    // console.log(claseActivo);
    return ('nav-item ' + claseActivo);
}