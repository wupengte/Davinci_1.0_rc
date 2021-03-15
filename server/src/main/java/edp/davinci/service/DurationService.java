package edp.davinci.service;


import edp.davinci.model.DavinciStaticDuration;
import edp.davinci.model.User;

import java.util.List;

public interface DurationService {

    List<DavinciStaticDuration> getCurDur(User user);
    float selSumTimeByName(User user);
}
