<?php
/**
 * Remove a menu item
 *
 * @param integer $id The ID of the menu item
 *
 * @package modx
 * @subpackage processors.system.menu
 */
$modx->lexicon->load('action','menu');

if (!$modx->hasPermission('menus')) return $modx->error->failure($modx->lexicon('permission_denied'));

/* get menu */
if (!isset($_POST['id'])) return $modx->error->failure($modx->lexicon('menu_err_ns'));
$menu = $modx->getObject('modMenu',$_POST['id']);
if ($menu == null) return $modx->error->failure($modx->lexicon('menu_err_nf'));

/* remove menu */
if ($menu->remove() == false) {
    return $modx->error->failure($modx->lexicon('menu_err_remove'));
}

/* log manager action */
$modx->logManagerAction('menu_delete','modMenu',$menu->get('id'));

return $modx->error->success();