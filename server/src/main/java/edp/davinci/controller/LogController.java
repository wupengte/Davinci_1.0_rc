package edp.davinci.controller;

import edp.core.annotation.CurrentUser;
import edp.davinci.common.controller.BaseController;
import edp.davinci.core.common.Constants;
import edp.davinci.core.common.ResultMap;
import edp.davinci.model.User;
import edp.davinci.service.DurationService;
import edp.davinci.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = Constants.BASE_API_PATH + "/log", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class LogController extends BaseController {

    @Autowired
    private OperationService operationService;

    @Autowired
    private DurationService durationService;

    @GetMapping
    public ResponseEntity getLog(@ApiIgnore @CurrentUser User user,
                                 HttpServletRequest request) {
        List<Map<String, String>> results_list = new ArrayList<>();
        Map<String, String> results_map = new HashMap<String, String>();
        String userName = user.getName();
        String department = user.getDepartment();
        String vistNum = String.valueOf(operationService.selVisitNumByName(user));
        String downNum = String.valueOf(operationService.selDownNumByName(user));
        String loginNum = String.valueOf(operationService.selLoginNumByName(user));
        String sumTime = String.valueOf(durationService.selSumTimeByName(user));
        results_map.put("userName", userName);
        results_map.put("department", department);
        results_map.put("vistNum", vistNum);
        results_map.put("downNum", downNum);
        results_map.put("loginNum", loginNum);
        results_map.put("sumTime", sumTime);
        results_list.add(results_map);
        //results_list.add(userName);
        //results_list.add(department);
        //results_list.add(vistNum);
        //results_list.add(downNum);
        //results_list.add(loginNum);
        //results_list.add(sumTime);
        return ResponseEntity.ok(new ResultMap(tokenUtils).successAndRefreshToken(request).payloads(results_list));
    }
}
