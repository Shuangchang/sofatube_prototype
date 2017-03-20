/**
 * Created by sxccias on 1/27/17.
 */

$(document).ready(function(){
   $("#addCredit").click(function () {
       var textfield = "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">" +
           "<input class=\"mdl-textfield__input\" type=\"text\"> " +
           "<label class=\"mdl-textfield__label\" >Name</label> " +
           "</div>";
       var selectionfield = "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select\"> " +
           "<input class=\"mdl-textfield__input\" type=\"text\" value=\"--non-selected--\" readonly tabIndex=\"-1\"> " +
           "<label><i class=\"mdl-icon-toggle__label material-icons\">keyboard_arrow_down</i></label>" +
       "<label for=\"Responsibility\" class=\"mdl-textfield__label\">Responsibility</label> " +
           "<ul for=\"Responsibility\" class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu\"> " +
           "<li class=\"mdl-menu__item\">--non-selected--</li> " +
           "<li class=\"mdl-menu__item\">Screen Writer</li> " +
           "<li class=\"mdl-menu__item\">Director of Photography</li> " +
           "<li class=\"mdl-menu__item\">Digital Imaging Technician</li> " +
           "<li class=\"mdl-menu__item\">Producer</li> " +
           "<li class=\"mdl-menu__item\">Editor</li> " +
           "<li class=\"mdl-menu__item\">Sound Designer</li> " +
           "<li class=\"mdl-menu__item\">Sound Mixer</li> " +
           "<li class=\"mdl-menu__item\">Visual Effects</li> " +
           "<li class=\"mdl-menu__item\">Color correction</li> " +
           "<li class=\"mdl-menu__item\">Production Designer</li> " +
           "<li class=\"mdl-menu__item\">Animator</li> " +
           "<li class=\"mdl-menu__item\">Light Artist/TD</li> " +
           "<li class=\"mdl-menu__item\">Rigging TD</li> " +
           "<li class=\"mdl-menu__item\">Modeling Artist</li> " +
           "<li class=\"mdl-menu__item\">Texture Artist</li> " +
           "<li class=\"mdl-menu__item\">Matte Painter/Background Artist</li> " +
           "<li class=\"mdl-menu__item\">Other</li></ul></div>";
       var separator = "<div class=\"demo-separator mdl-cell--1-col\"></div>"
       $("#addCreditDiv").append(textfield);
       $("#addCreditDiv").append(selectionfield);
       $("#addCreditDiv").append(separator);
   });
   $("#addCollaborators").click(function () {
       var textfield = "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">" +
           "<input class=\"mdl-textfield__input\" type=\"text\"> " +
           "<label class=\"mdl-textfield__label\" >Name</label> " +
           "</div>";
       $("#addCollaboratorsDiv").append(textfield);
   })
});
