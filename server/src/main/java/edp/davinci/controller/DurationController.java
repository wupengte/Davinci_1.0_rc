package edp.davinci.controller;


import edp.core.annotation.CurrentUser;
import edp.davinci.common.controller.BaseController;
import edp.davinci.core.common.Constants;
import edp.davinci.core.common.ResultMap;
import edp.davinci.model.DavinciStaticDuration;
import edp.davinci.model.User;
import edp.davinci.service.DurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping(value = Constants.BASE_API_PATH + "/duration", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class DurationController extends BaseController {

    @Autowired
    private DurationService durationService;

    @GetMapping
    public ResponseEntity getDurationLog(@ApiIgnore @CurrentUser User user, HttpServletRequest request){
        List<DavinciStaticDuration> durations = durationService.getCurDur(user);
        return ResponseEntity.ok(new ResultMap(tokenUtils).successAndRefreshToken(request).payloads(durations));
    }
}
