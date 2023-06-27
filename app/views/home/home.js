'use strict';
kuroApp.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.sortBy = function (colName) {
        $scope.reverse = ($scope.colName === colName) ? !$scope.reverse : false;
        $scope.colName = colName;
    };

    $scope.checkUncheckAll = function () {
        $scope.checkall = $scope.checkall ? true : false;
        angular.forEach($scope.loginDetails, (user) => {
            user.checked = $scope.checkall;
        });
        $scope.canDelete = !$scope.checkall ? true : false;
    };

    $scope.updateCheckall = function () {
        let userTotal = $scope.loginDetails.length;
        let count = 0;
        angular.forEach($scope.loginDetails, (item) => {
            item.checked && count++;
        });
        $scope.checkall = (userTotal == count) ? true : false;
        $scope.canDelete = (count <= 0) ? true : false;
    };

    $scope.deleteUser = function (index) {
        triggerDeleteAlert(function (result) {
            if (result.isConfirmed) {
                $scope.loginDetails.splice(index, 1);
                $scope.loginDetails = $scope.loginDetails;
                $scope.$apply();
                Toast.fire({
                    icon: 'success',
                    title: 'Delete Successfully'
                });
            }
        });
    }

    $scope.deleteChecked = function () {
        triggerDeleteAlert(function (result) {
            if (result.isConfirmed) {
                let updtaedLoginDetails = [];
                angular.forEach($scope.loginDetails, (user) => {
                    if (!user.checked) {
                        updtaedLoginDetails.push(user);
                    }
                });
                $scope.loginDetails = updtaedLoginDetails;
                $scope.$apply();
                Toast.fire({
                    icon: 'success',
                    title: 'Delete Successfully'
                });
            }
        })
    }

    function triggerDeleteAlert(callback) {
        return Swal.fire({
            title: 'Are you sure want to delete it?',
            iconHtml: '<i class="delete-alert"></i>',
            customClass: {
                container: 'delete-toast',
            },
            toast: true,
            showCancelButton: true,
            confirmButtonColor: '#D94E3B',
            cancelButtonColor: '#fff',
            confirmButtonText: 'Yes'
        }).then((result) => {
            callback(result);
        });
    }

    function getLoginDetails() {
        $http.get('/data.json').then(function (response) {
            if (response.status == 200)
                $scope.loginDetails = response.data;
        })
    }

    const table = document.getElementsByClassName('table table-bordered')[0];
    const tbody = table.querySelector('tbody');

    var currRow = null,
        dragElem = null,
        mouseDownX = 0,
        mouseDownY = 0,
        mouseX = 0,
        mouseY = 0,
        mouseDrag = false;



    function bindMouse() {
        document.addEventListener('mousedown', (event) => {
            if (event.button != 0) return true;

            let target = getTargetRow(event.target);
            if (target) {
                currRow = target;
                addDraggableRow(target);
                currRow.classList.add('is-dragging');


                let coords = getMouseCoords(event);
                mouseDownX = coords.x;
                mouseDownY = coords.y;

                mouseDrag = true;
            }
        });

        document.addEventListener('mousemove', (event) => {
            if (!mouseDrag) return;

            let coords = getMouseCoords(event);
            mouseX = coords.x - mouseDownX;
            mouseY = coords.y - mouseDownY;

            moveRow(mouseX, mouseY);
        });

        document.addEventListener('mouseup', (event) => {
            if (!mouseDrag) return;

            currRow.classList.remove('is-dragging');
            table.removeChild(dragElem);

            dragElem = null;
            mouseDrag = false;
        });
    }

    function swapRow(row, index) {
        let currIndex = Array.from(tbody.children).indexOf(currRow),
            row1 = currIndex > index ? currRow : row,
            row2 = currIndex > index ? row : currRow;

        tbody.insertBefore(row1, row2);
    }

    function moveRow(x, y) {
        dragElem.style.transform = "translate3d(0, " + y + "px, 0)";

        let dPos = dragElem.getBoundingClientRect(),
            currStartY = dPos.y, currEndY = currStartY + dPos.height,
            rows = getRows();

        for (var i = 0; i < rows.length; i++) {
            let rowElem = rows[i],
                rowSize = rowElem.getBoundingClientRect(),
                rowStartY = rowSize.y, rowEndY = rowStartY + rowSize.height;

            if (currRow !== rowElem && isIntersecting(currStartY, currEndY, rowStartY, rowEndY)) {
                if (Math.abs(currStartY - rowStartY) < rowSize.height / 2)
                    swapRow(rowElem, i);
            }
        }
    }

    function addDraggableRow(target) {
        dragElem = target.cloneNode(true);
        dragElem.classList.add('draggable-table__drag');
        dragElem.style.background = getStyle(target, 'backgroundColor');
        for (var i = 0; i < target.children.length; i++) {
            let oldTD = target.children[i],
                newTD = dragElem.children[i];
            newTD.style.width = getStyle(oldTD, 'width');
        }

        table.appendChild(dragElem);


        let tPos = target.getBoundingClientRect(),
            dPos = dragElem.getBoundingClientRect();
        dragElem.style.bottom = ((dPos.y - tPos.y) - tPos.height) + "px";
        dragElem.style.left = "-1px";

        document.dispatchEvent(new MouseEvent('mousemove',
            { view: window, cancelable: true, bubbles: true }
        ));
    }

    function getRows() {
        return table.querySelectorAll('tbody tr');
    }

    function getTargetRow(target) {
        let elemName = target.tagName.toLowerCase();
        let eleParentName = target.parentNode.tagName.toLowerCase();

        if (elemName == 'tr' || elemName == 'td') return false;
        if (target.classList.contains('drag-handle') || target.parentNode.classList.contains('drag-handle')) return target.closest('tr');
    }

    function getMouseCoords(event) {
        return {
            x: event.clientX,
            y: event.clientY
        };
    }

    function getStyle(target, styleName) {
        let compStyle = getComputedStyle(target),
            style = compStyle[styleName];

        return style ? style : null;
    }

    function isIntersecting(min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) &&
            Math.min(min0, max0) <= Math.max(min1, max1);
    }
    $scope.canDelete = true;
    bindMouse();
    getLoginDetails();

}]);